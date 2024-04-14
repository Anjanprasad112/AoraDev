import { Account,Avatars,Client,ID,Databases,Query ,Storage} from 'react-native-appwrite';
export const config = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform : 'com.anjan.aoradev',
    projectId : '661c28ea94acfb095e88',
    databaseId : '661c2a6368b1df7745a1',
    userCollectionId : '661c2a8ae0074836dda3',
    videoColletionId : '661c2aac3cd0f39202af',
    storageId:'661c2c468792baf04ef2'
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform)
;


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async(email,password,username)=>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
}

export async function signIn(email, password){
    try {
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
        
    }
}


export async function getAccount() {
    try {
      const currentAccount = await account.get();
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  }

export async function getCurrentUser(){
    try {
        const currentAccount = await getAccount();
        if(!currentAccount){
            throw Error;
        }
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
          );
      
          if (!currentUser) throw Error;
      
          return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
        
    }
}