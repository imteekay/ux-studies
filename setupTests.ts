import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

const getInsertesectionObserver = () => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  const intersectionObserverMock = () => ({
    observe,
    unobserve,
  });

  return jest.fn().mockImplementation(intersectionObserverMock);
};

window.IntersectionObserver = getInsertesectionObserver();
