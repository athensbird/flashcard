import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'flashcard_nanodegree_project_III';

export function getDecks() {
  AsyncStorage.getItem(DECK_STORAGE_KEY, (err, res) => {
    let decks = JSON.parse(res);
    return decks;
  })
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function saveDeckTitle(title) {

}

export function addCardToDeck( {title, card} ) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results => {
      let decks = JSON.parse(results);
      const deck = title;
      if (decks === null) {
        decks = getDecks();
      }
      decks[deck].questions.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    });
}
