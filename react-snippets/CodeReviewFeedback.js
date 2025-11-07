import React, { useState } from "react";

const FeedbackSystem = () => {
  const [aspects, setAspects] = useState([
    {
      "name" : "Readability",
      "upvote" : 0,
      "downvote" : 0
    }, 
    {
      "name" : "Performance",
      "upvote" : 0,
      "downvote" : 0
    }, 
    {
      "name" : "Security",
      "upvote" : 0,
      "downvote" : 0
    }, 
    {
      "name" : "Documentation",
      "upvote" : 0,
      "downvote" : 0
    }, 
    {
      "name" : "Testing",
      "upvote" : 0,
      "downvote" : 0
    }])

  const handleUpvote = (index) => {
    setAspects(prevAspects => prevAspects.map((aspect, i) => i === index ? {...aspect, upvote : aspect.upvote +1 } : aspect)) 

    /*
      .map() — Fonctionnement :

      - Permet de parcourir un tableau et de transformer ses éléments un par un.
      - Syntaxe : array.map((element, index, array) => {...})
          • element → l’élément courant du tableau
          • index → la position de cet élément
          • array → le tableau complet (optionnel)
      - Retourne un **nouveau tableau** contenant le résultat de la fonction appliquée à chaque élément.
      - Ne modifie **jamais** le tableau original (immutabilité).
      - Très utilisé en React pour créer des listes ou mettre à jour un state sans altérer l’ancien.

      Exemple :
      [1, 2, 3].map(num => num * 2) → [2, 4, 6]
    */

    
    /*
      Explication du code :

      [{ ...prevAspects[0], upvote: prevAspects[0].upvote + 1 }, ...prevAspects.slice(1)]

      1. prevAspects.slice(1)
        → crée un nouveau tableau contenant tous les éléments sauf le premier.

      2. ...prevAspects.slice(1)
        → "déplie" ce tableau pour insérer chaque élément individuellement dans le nouveau tableau
          (évite d’avoir un tableau dans un tableau).

      3. { ...prevAspects[0], upvote: prevAspects[0].upvote + 1 }
        → crée une copie de l’objet du premier aspect avec le spread operator (...).
          - Le spread copie toutes les propriétés existantes (name, upvote, downvote).
          - Ensuite, upvote: prevAspects[0].upvote + 1 écrase la valeur originale pour l’incrémenter.

      4. L’ordre des éléments est important :
        - Cette version garde le premier aspect en premier, mais mis à jour.
        - Si on mettait le spread après ( ...prevAspects.slice(1), {...}), le premier élément serait déplacé à la fin.

      5. En résumé :
        - slice → enlève le premier élément.
        - spread (...) → décompose le tableau.
        - {...obj, prop: newValue} → copie un objet et remplace certaines propriétés.
        - La dernière clé du même nom écrase les précédentes.
      */

  }

  const handleDownvote = (index) => {
    setAspects(prevAspects => prevAspects.map((aspect, i) => i === index ? {...aspect, downvote : aspect.downvote +1 } : aspect)) 
  }

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
          {aspects.map((aspect, index) => ( 
            <div key={index} className="pa-10 w-300 card">
              <h2>{aspect.name}</h2>
              <div className="flex my-30 mx-0 justify-content-around">
                <button onClick={() => handleUpvote(index)} className="py-10 px-15" data-testid={`upvote-btn-${index}`}> {/* l'intérieur de la fonction anonyme garde en trace la valeur de index lorsque React l'éxecute */}
                  👍 Upvote
                </button>
                <button onClick={() => handleDownvote(index)} className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`}>
                  👎 Downvote
                </button>
              </div>
              <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                Upvotes: <strong>{aspect.upvote}</strong>
              </p>
              <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                Downvotes: <strong>{aspect.downvote}</strong>
              </p>
          </div>))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
