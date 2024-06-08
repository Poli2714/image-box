import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { EditCollectionNameForm } from './components';

type EditCollectionBtnProps = {
  collectionId: string;
};

function EditCollectionBtn({ collectionId }: EditCollectionBtnProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='col-start-2 row-span-2 place-self-center'
          variant='outline'
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className='relative'>
        <DialogHeader>
          <DialogTitle>Edit Collection Name</DialogTitle>
          <DialogDescription>
            Provide a new name for your collection.
          </DialogDescription>
        </DialogHeader>
        <EditCollectionNameForm collectionId={collectionId} />
      </DialogContent>
    </Dialog>
  );
}

export default EditCollectionBtn;
