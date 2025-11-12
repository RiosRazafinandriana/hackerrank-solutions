import React from "react";

function Articles({ articles = [] }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index)=> (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
          {/*<tr data-testid="article" key="article-index">
            <td data-testid="article-title">Article 1 title</td>
            <td data-testid="article-upvotes">Article 1 upvotes</td>
            <td data-testid="article-date">Article 1 date</td>
          </tr>*/}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
