/* eslint-disable react-hooks/exhaustive-deps */
import { Editor } from "@tinymce/tinymce-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: Props) => {
  return (
    <div>
      <h2>a left side menu panel</h2>
      <h2>a body container</h2>
      {children}

      <Editor
        apiKey="ptgxtryj2toyk5csxrpybtvg42i6c5gzpwiw1xlc61dqsjbn"
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          // skin: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          branding: false,
          placeholder: "Enter your text",
          resize: false,
          statusbar: false
        }}
      />
    </div>
  );
};
export default PrivateRoute;
