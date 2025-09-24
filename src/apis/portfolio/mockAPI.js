const mockAPI = {
  createPortfolio: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { portfolio_id: 'portfolio_' + Date.now() };
  },

  getPortfolioStatus: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const statuses = ['generating', 'generating', 'generated'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    return { status: randomStatus };
  },

  getPortfolio: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      id,
      title: 'My Awesome Portfolio',
      theme: 'modern',
      sections: ['hero', 'about', 'projects', 'contact'],
      url: `https://portfolio.example.com/${id}`,
    };
  },
};

export default mockAPI;
