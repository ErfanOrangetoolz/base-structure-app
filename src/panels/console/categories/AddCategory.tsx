import { Box, Button, TextField, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

const AddCategory = () => {
  return (
    <div>
      <Box p={3} borderBottom={"1px solid"} borderColor={"other.divider"}>
        <Typography variant="h5">Add Category</Typography>
      </Box>

      <Box p={3}>
        <Box sx={{ maxWidth: "50%", mb: 3 }}>
          <TextField id="outlined-basic" label="Category Name" variant="outlined" fullWidth />
        </Box>

        <Typography variant="body2" fontWeight={600} mb={1} color={"text.secondary"}>
          Description
        </Typography>

        <Editor
          apiKey="ptgxtryj2toyk5csxrpybtvg42i6c5gzpwiw1xlc61dqsjbn"
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 300,
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

        <Button variant="contained" sx={{ mt: 3 }}>
          Add New Category
        </Button>
      </Box>
    </div>
  );
};
export default AddCategory;
