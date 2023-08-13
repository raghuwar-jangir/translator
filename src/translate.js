const api_key = 'AIzaSyBpXJwRLD2fyohN9MOzeQhh-O8qxHo896Y';

export const translate = async (text="hello world", targetLang="fr") => {
 const response = await fetch(`translate.googleapis.com/language/translate/v2?key=${api_key}&q=${text}&target=${targetLang}`);
 const result = await response.json();
 return result;
};


