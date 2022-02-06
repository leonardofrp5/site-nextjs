export const variants = {
  visible: {
    transition: {
      staggerChildren: 0.025
    }
  }
};

export const item = {
  hidden: {
    y: '200%',
    transition: { type: 'spring', stiffness: 100 }
  },
  visible: {
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};
