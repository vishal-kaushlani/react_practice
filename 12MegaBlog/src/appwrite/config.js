import conf from "../conf/conf";
import {Client, ID, Database, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Database(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            throw error
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("AppWrite Service: deletepost :: error",error)
            return false
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch(error){
            console.log("AppWrite Service: deletepost :: error",error)

        }

    }

    async getPost(slug){
        try{
            conf.appwriteDatabaseID,
            cong,appwriteCollectionId,
            slug
        }
        catch(error){
            console.log("Appwrite service :: getpost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        //for multiple
//    const queries = [
//     Query.equal("status", "active"),
//     Query.greater("createdAt", "2023-01-01"), // Example: created after 2023-01-01
//     Query.equal("category", "tech") // Example: only posts from 'tech' category
//   ];
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                cong,appwriteCollectionId,
                queries,
            )
        }
        catch(error){
            console.log("Appwrite service :: getposts :: error", error);
            return false
        }

    }

     async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileID){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true
        }
        catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }





}