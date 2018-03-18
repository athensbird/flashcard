import { AsyncStorage } from 'react-native';
import { dummyDecks } from './dummyData';

const DECK_STORAGE_KEY = 'flashcard_nanodegree_project_III';

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      console.log(res);
      if (res === null) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyDecks))
          .then(err => console.log(err));
        return dummyDecks;
      } else {
        return JSON.parse(res);
      }
    });
}

export function getDeck(id) {
  return AsyncStorage.getItem();
}

export function saveDeckTitle(deckTitle) {
  const card = {
    deckTitle: {
      title: deckTitle,
      questions: []
    }
  };
  console.log(card);
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(card));
}

export function addCardToDeck({ title, card }) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      let decks = JSON.parse(res);
      if (decks === null) {decks = getDecks();}
      decks[title].questions.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    });
}
