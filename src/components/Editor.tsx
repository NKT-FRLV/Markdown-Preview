import React from 'react';

type EditorProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
};

const Editor = ({ onChange, inputValue }: EditorProps) => {
  return (
    <div className="w-full ">
      <form>
        <textarea
          className=" border-2 w-full p-2 border-gray-600 bg-white h-120"
          value={inputValue}
          onChange={onChange}
          placeholder="type your md"
        ></textarea>
      </form>
    </div>
  );
};

export default Editor;
