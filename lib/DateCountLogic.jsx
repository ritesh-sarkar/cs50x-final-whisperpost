export const isToday = (msgDate) => {
  const today = new Date();
  const messageDate = new Date(msgDate);

  return (
    today.getDate() === messageDate.getDate() &&
    today.getMonth() === messageDate.getMonth() &&
    today.getFullYear() === messageDate.getFullYear()
  );
};

export const isThisWeek = (msgDate) => {
  const today = new Date();
  const messageDate = new Date(msgDate);
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 7);

  return messageDate >= weekAgo && messageDate <= today;
};
