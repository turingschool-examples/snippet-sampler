const firebase = require('./firebase');
const validateInputFields = require('./validate-input-fields');
const {
  $snippetsSection,
  $newSnippetForm,
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit,
  $signInButton,
  $userInfo
} = require('./elements');
const renderSnippet = require('./render-snippet');

$newSnippetTitle.on('keyup', validateInputFields);
$newSnippetCode.on('keyup', validateInputFields);

$newSnippetForm.on('submit', (e) => {
  e.preventDefault();

  const title = $newSnippetTitle.val();
  const code = $newSnippetCode.text();

  if (currentUser) createSnippet(currentUser, title, code);

  $newSnippetTitle.val('');
  $newSnippetCode.text('');
});

let currentUser;
const provider = new firebase.auth.GoogleAuthProvider();
const snippetsReference = firebase.database().ref().child('snippets');

$signInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  $signInButton.toggle(!currentUser);
  $newSnippetForm.toggle(!!currentUser);

  if (currentUser) {
    const { displayName, email } = currentUser;
    $userInfo.text(`Sign in as ${displayName} (${email}).`);
  } else {
    $userInfo.text('');
  }
});

snippetsReference.on('value', (snapshot) => {
  const snippet = snapshot.val();
  console.log(snippet);
  $snippetsSection.append(renderSnippet(snippet.title, snippet.code));
});

const createSnippet = (user, title, code) => {
  const { uid, displayName } = user;

  const snippet = {
    uid: uid,
    author: displayName,
    title,
    code
  };

  snippetsReference.push(snippet);
}
