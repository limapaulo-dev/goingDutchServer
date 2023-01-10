const checkUSer = async (object, objectAtt) => {
  await object.findOne(objectAtt);
};
