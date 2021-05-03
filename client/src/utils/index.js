import { toast } from "react-toastify";

export const scfoxes = async (endpoint, { body, ...customConfig } = {}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  if (customConfig.token) {
    config.headers.authorization = `Bearer ${customConfig.token}`;
  }

  if (!customConfig.token && user?.token) {
    config.headers.authorization = `Bearer ${user.token}`;
  }

  const res = await fetch(endpoint, config);
  const data = await res.json();

  if (res.status !== 200) {
    return toast(data.message);
  }

  return data;
};

export const timeSince = (timestamp) => {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }

  return Math.floor(seconds) + " seconds";
};

export const authenticate = async (type, data) => {
  const uriFoxes = process.env.REACT_APP_FOXES_SKY;

  try {
    const { data: token } = await scfoxes(`${uriFoxes}/auth/${type}`, {
      body: data,
    });

    if (token) {
      const { data: user } = await scfoxes(`${uriFoxes}/auth/skymine`, { token });

      localStorage.setItem("user", JSON.stringify({ ...user, token }));

      return { ...user, token };
    }
    
  } catch (err) {
    console.log(err);
  }
};

export const removeChannelLocalSt = (channelId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updated = {
    ...user,
    channels: user.channels.filter((channel) => channel.id !== channelId),
  };

  localStorage.setItem("user", JSON.stringify(updated));
};

export const addChannelLocalSt = (channel) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updated = {
    ...user,
    channels: [channel, ...user.channels],
  };

  localStorage.setItem("user", JSON.stringify(updated));
};

export const updateUserLocalSt = (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedUser = { ...user, ...data };
  localStorage.setItem("user", JSON.stringify(updatedUser));
};
