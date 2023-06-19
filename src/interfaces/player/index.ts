import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  coach_id: string;
  academy_id: string;
  created_at?: any;
  updated_at?: any;

  user_player_user_idTouser?: UserInterface;
  user_player_coach_idTouser?: UserInterface;
  academy?: AcademyInterface;
  _count?: {};
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  academy_id?: string;
}
