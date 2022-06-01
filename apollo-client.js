import { ApolloClient, InMemoryCache } from "@apollo/client";

//console.log("NEXT_PUBLIC_STEPZEN_KEY11111: ", process.env.NEXT_PUBLIC_STEPZEN_KEY)

const client = new ApolloClient({
    uri: "https://kayanza.stepzen.net/api/goodly-porcupine/__graphql",
    headers: {
        authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
    },
    cache: new InMemoryCache(),
});

export default client;