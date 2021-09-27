import questionsConfig from "../config/questions.json";

export default (n) => {
  try {
    if (!/^[0-9]+$/.test(n)) return false;

    if (n > questionsConfig.MAX_VALUE) return false;

    if (n < questionsConfig.MIN_VALUE) return false;

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
