import "h8k-components";

import Articles from "./components/Articles";
import { useState,useEffect } from "react"

import "./App.css";

function App({ articles }) {

    // Concept clé : on ne modifie jamais directement les props (ici `articles`) car elles sont immuables.
    // On crée plutôt un state local (`sortedArticles`) comme copie des props pour pouvoir trier et mettre à jour librement.
    // useEffect([]) initialise le tri une seule fois au montage, et les boutons modifient seulement le state local via setSortedArticles, ce qui déclenche un re-render sans altérer la prop originale.


  const [sortedArticles, setSortedArticles] = useState([...articles])

  useEffect(()=>{
    const articlesCopy = [...articles];
    for (let i =0; i < articlesCopy.length; i++){
      let maxIndex = i;
      for (let j = i + 1; j < articlesCopy.length ; j++) {
        if (articlesCopy[j].upvotes > articlesCopy[maxIndex].upvotes){
          maxIndex = j
        }
      }
      [articlesCopy[i], articlesCopy[maxIndex]] = [articlesCopy[maxIndex], articlesCopy[i]]
    }
    setSortedArticles(articlesCopy)
  }, []) // tableau de dépendance [] pour que le useEffect ne s'execute qu'une seule fois, mais non pas à chaque fois click des boutons ou changement d'état

  const handleMostUpvoted = () => {
    const articlesCopy = [...articles];
    for (let i =0; i < articlesCopy.length; i++){
      let maxIndex = i;
      for (let j = i + 1; j < articlesCopy.length ; j++) {
        if (articlesCopy[j].upvotes > articlesCopy[maxIndex].upvotes){
          maxIndex = j
        }
      }
      [articlesCopy[i], articlesCopy[maxIndex]] = [articlesCopy[maxIndex], articlesCopy[i]]
    } // Ou juste articlesCopy.sort((a, b) => b.upvotes - a.upvotes); ou directement const sorted = [...articles].sort((a, b) => b.upvotes) - a.upvotes);
    setSortedArticles(articlesCopy)
  };

  const handleMostRecent = () => {
    const articlesCopy = [...articles];
    for (let i =0; i < articlesCopy.length; i++){
      let maxIndex = i;
      for (let j = i + 1; j < articlesCopy.length ; j++) {
        if (new Date (articlesCopy[j].date) > new Date(articlesCopy[maxIndex].date)){
          maxIndex = j
        }
      }
      [articlesCopy[i], articlesCopy[maxIndex]] = [articlesCopy[maxIndex], articlesCopy[i]]
    } // Ou juste articlesCopy.sort((a, b) => new Date(b.date) - new Date(a.date)); ou directement const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedArticles(articlesCopy)
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={sortedArticles} />
      </div>
    </>
  );
}

export default App;
