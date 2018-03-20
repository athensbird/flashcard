import { AsyncStorage } from 'react-native';
import { dummyDecks } from './dummyData';

const DECK_STORAGE_KEY = 'flashcard_nanodegree_project_III';

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
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
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  };
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(card));
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      let decks = JSON.parse(res);
      if (decks === null) {decks = getDecks();}
      decks[title].questions.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    });
}

export function removeDeck(title) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      let decks = JSON.parse(res);
      if (decks === null) {decks = getDecks();}
      decks[title] = undefined;
      delete decks[title];
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    })
}

/*
export function removeEmptyDeck() {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      let decks = JSON.parse(res);
      if (decks === null) {decks = getDecks();}
      const keys = Object.keys(decks).filter(d => decks[d][title] === '');
      console.log("keys", keys);
      for (let key of keys) {
        delete decks[key];
      }
      console.log("decks", decks);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    })
}
*/
