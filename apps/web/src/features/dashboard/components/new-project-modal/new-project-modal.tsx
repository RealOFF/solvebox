import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type NewProjectProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewProjectModal({ isOpen, onRequestClose }: NewProjectProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onRequestClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onRequestClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Create New Project
            </Dialog.Title>

            <div className="mt-2">
              <input
                className="w-full p-2 mb-4 border rounded-md"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Project Title"
              />
              <textarea
                className="w-full p-2 border rounded-md"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
