import * as db from '../helpers/database';

export const findByUsername = async (username: string) => {
  const query = 'SELECT * FROM users where username = ?';
  const user = await db.run_query(query,  [username] );
  return user;
}


