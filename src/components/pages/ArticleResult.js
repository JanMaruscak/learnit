import React from "react";

function Default() {
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

function ArticleResult(props) {
  var files = ["Ano", "FourierovaTransformace", "Kocicka", "Penc", "Stieber"];
  // var arr = ["ano","ne","Fourierova Transformace","Koicka"]
  var newArr = [];
  var query = props.location.search.substring(1);
  query = query.toUpperCase();
  for (var i = 0; i < files.length; i++) {
    if (files[i].toUpperCase().indexOf(query) > -1) {
      newArr.push(files[i]);
    }
  }
  console.log(newArr);
  return (
    <main>
      <div className="articles">
        {newArr.map(item => {
          // Return the element. Also pass key
          console.log(tryRequire(`./ArticleLinks/${item}`));
          console.log(`./ArticleLinks/${item}`);
          const ArticleLink = tryRequire(`./ArticleLinks/${item}`)
            ? tryRequire(`./ArticleLinks/${item}`).default
            : Default;
          return <ArticleLink />;
        })}
      </div>
    </main>
  );
}
const tryRequire = path => {
  try {
    // console.log(path)
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};

export default ArticleResult;
