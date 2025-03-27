import server from './server';
import { PORT } from './config/envs';
import { initializeAppDataSource } from './config/data-source';


try{
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })}
    catch(error){
        console.log(error);
    };

    initializeAppDataSource();