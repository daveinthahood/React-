//**! WebPack !**//

** npx webpack **  >> in questo caso vogliamo eseguire webpack per impacchettare un codice e lo salverà in un nuovo file 
** minify ** >> minimizziamo un file 

//**! Configurazione !**//

1. Dobbiamo creare il file nella directory scrivendo questo codice ** touch webpack.config.js **, una volta eseguito creerà un nuovo file 
2. Quando vogliamo modificare qualcosa dobbiamo riaprire il terminale e scrivere ** npx webpack --config webpack + "nome del file" ** 

//**! Plugin !**// 

1. ESLint 
    //*? npm install eslint-webpack-plugin --save-dev ?*//
    //*? const ESLintPlugin = require('eslint-webpack-plugin'); ?*//


//**! Development and Production !**//

    //*? Development Configuration ?*//
    aggiungere mode: "development" al nostro oggetto module.exports 

    //*? Production configuration ?*// 
    
