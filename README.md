# OnlyPostApp
## _Funcion: devolver 3 publicaciones de 5 usuarios_

Aplicación compatible para dispositivos ios/android

>Se decidió usar un customHook ya que el proposito de la aplicacion es pequeña, no es tener  tantos estados de lo contrario se usaria redux para el manejador de estados.

>Al iniciar la aplicación se evalua si tenemos guardado los datos de las publicaciones en
 storage de ser asi, se setean los datos en la page Home.

>Se implemento el onRefresh para que el usuario cada vez que le de pull se haga la peticion nuevamente trayendo los datos actualizados

>Al obtener los datos se esta usando Flashlist ya que tiene mejor desplazamiento eficiente de la memoria y en uso de fps que la Flatlist, asi la app tendrá un mejor rendimiento.

>En el customHook se creo una funcion donde se obtiene todos los usuarios en el endpoint "https://jsonplaceholder.typicode.com/users" y se uso de la funcion "filter" para obtener solo los 5 usuarios.

>Se hace uso de la funcion "getPostsOfUser" enviando como parametro de entrada el id para hacer la peticion al endpoint "https://jsonplaceholder.typicode.com/users/${ID}/posts" y asi obtenemos todos las publicaciones de esos 5 usuarios y lo guardamos como Promise.all a la variable "allPosts".

>Se crea un array "allRealPosts"  en donde a travez del map recorremos todo el "allPosts" que obtenemos anteriormente 

>Finalmente se crea una constante "userPosts" en donde a travez de un map. recorremos los 5 usuarios y agregamos mas campos adicionales tales como {picture,loggedImageUser,publications} donde publications tiene todas las publicaciones y le aplicamos el .slice(0, 3) para asi guardar en ese campo unicamente 3 publicaciones que es lo que se requiere, con esto se obtiene los 5 usuarios con 3 publicaciones.


 

## Instalacion

OnlyPostApp requiere [Node.js](https://nodejs.org/) v10+ para ejecutarse en local.

Instale las dependencias y devDependencies e inicie el servidor.

```sh
cd OnlyPostApp
npm i / yarn install
yarn android
```

For ios...

```sh
cd OnlyPostApp
cd ios
pod install
return to OnlyPostApp
yarn ios
```

## Plugins

Las instrucciones sobre cómo usar los plugins en su propia aplicación están vinculadas a continuación.

| Plugin | README |
| ------ | ------ |
| React-native-vector-icons | https://github.com/oblador/react-native-vector-icons|
| React-native-splash-screen |https://github.com/crazycodeboy/react-native-splash-screen|
| Axios | https://axios-http.com/docs/intro |
| TypeScript | https://www.typescriptlang.org/ |


  
![Simulator Screen Shot - iPhone 13 - 2022-09-05 at 03 18 41](https://user-images.githubusercontent.com/58519791/188471245-9d41ab02-a409-42ac-a9bb-a4423d8e5aac.png)
