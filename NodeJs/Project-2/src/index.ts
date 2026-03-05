import {app} from './server.ts';
import {env} from '../env.ts';

app.listen(env.PORT, () => {
  console.log(`I'm running at ${env.PORT} steps a second!`);
});