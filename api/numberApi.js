export const fetchNumberInfo = async (num) => {
  try {
    const response = await fetch(`http://numbersapi.com/${num}/trivia`);
    if (!response.ok) {
      throw new Error('Erro ao buscar informações');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
