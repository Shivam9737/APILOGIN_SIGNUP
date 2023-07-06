const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://Shivam:gg123456gg@cluster0.hiewecz.mongodb.net/'
    }
}



exports.get = function get(env){
    return config[env] || config.default
}