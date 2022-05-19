
const PunctuationRemoved = (search) => {

     let p = "!@#$%^&*()_+{}[]|\/.;':,."
     let chars = search.split('');

     for (let i = 0; i < chars.length; i++ ){
         if (p.includes(chars[i])){
             chars[i] = '';
         }
     }
  
}

module.exports = PunctuationRemoved;