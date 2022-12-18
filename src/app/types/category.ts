import { NoteType } from ".";

type CategoryType = {
  id: string;
  name: string;
  notes: NoteType[];
}

export default CategoryType;
