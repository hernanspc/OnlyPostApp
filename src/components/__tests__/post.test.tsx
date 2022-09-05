import React from 'react';
import { View, Text } from 'react-native'
import { shallow } from 'enzyme';
import PostCard from '../post';

describe('Testing Component SearchBox', () => {

    const dataMock = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            },
            "picture": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user1.jpg",
            "loggedImageUser": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
            "publications": [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post1.jpg"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post2.jpg"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post3.jpg"
                }
            ],
            "likes": 10,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            },
            "picture": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user2.jpg",
            "loggedImageUser": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
            "publications": [
                {
                    "userId": 2,
                    "id": 11,
                    "title": "et ea vero quia laudantium autem",
                    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post11.jpg"
                },
                {
                    "userId": 2,
                    "id": 12,
                    "title": "in quibusdam tempore odit est dolorem",
                    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post12.jpg"
                },
                {
                    "userId": 2,
                    "id": 13,
                    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
                    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post13.jpg"
                }
            ],
            "likes": 20,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            },
            "picture": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user3.jpg",
            "loggedImageUser": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
            "publications": [
                {
                    "userId": 3,
                    "id": 21,
                    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
                    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post21.jpg"
                },
                {
                    "userId": 3,
                    "id": 22,
                    "title": "dolor sint quo a velit explicabo quia nam",
                    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post22.jpg"
                },
                {
                    "userId": 3,
                    "id": 23,
                    "title": "maxime id vitae nihil numquam",
                    "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post23.jpg"
                }
            ],
            "likes": 30,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            },
            "picture": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user4.jpg",
            "loggedImageUser": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
            "publications": [
                {
                    "userId": 4,
                    "id": 31,
                    "title": "ullam ut quidem id aut vel consequuntur",
                    "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post31.jpg"
                },
                {
                    "userId": 4,
                    "id": 32,
                    "title": "doloremque illum aliquid sunt",
                    "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post32.jpg"
                },
                {
                    "userId": 4,
                    "id": 33,
                    "title": "qui explicabo molestiae dolorem",
                    "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post33.jpg"
                }
            ],
            "likes": 40,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            },
            "picture": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user5.jpg",
            "loggedImageUser": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
            "publications": [
                {
                    "userId": 5,
                    "id": 41,
                    "title": "non est facere",
                    "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post41.jpg"
                },
                {
                    "userId": 5,
                    "id": 42,
                    "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
                    "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post42.jpg"
                },
                {
                    "userId": 5,
                    "id": 43,
                    "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
                    "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
                    "imagenPublicacion": "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post43.jpg"
                }
            ],
            "likes": 50,
            "isLiked": false
        }
    ]

    const wrapper = shallow(<PostCard user={dataMock[0]} />);

    test('should Container SearchBox exist', () => {
        expect(wrapper.find('View')).toHaveLength(37);
    });

    test('should Text render', () => {
        expect(wrapper.children().find('Text').at(0).props().children).toEqual(["User ", dataMock[0].id]);
        expect(wrapper.children().find('Text')).toHaveLength(19);
    });

});