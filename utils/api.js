import { AsyncStorage } from 'react-native';
import { dummyDecks } from './dummyData';

const DECK_STORAGE_KEY = 'flashcard_nanodegree_project_III';

export function getDecks() {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      if (res.length === 0) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyDecks));
        return dummyDecks;
      } else {
        return JSON.parse(res);
      }
    })
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export function saveDeckTitle(deckTitle) {
  const card = {
    title: deckTitle,
    questions: []
  };
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(card));
}

export function addCardToDeck({ title, card }) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => res.filter(deck => deck.title === title))
    .then(res => {
      let decks = JSON.parse(res);
      const deck = title;
      if (decks === null) {
        decks = getDecks();
      }
      decks[deck].questions.push(card);
      AsyncStorage.setItem(id, JSON.stringify(decks));
    });
}
