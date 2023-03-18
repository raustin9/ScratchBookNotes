import { useNote  } from "./NoteLayout";
import { Row , Col , Stack , Badge , Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router-dom";


type NoteProps = {
  onDelete: (id: string) => void
}

function Note( {onDelete}: NoteProps ) {
  const note = useNote();
  const navigate = useNavigate();

  return <>
    <Row className="align-items-center mb4">
      <Col>
        <h1>{note.title}</h1>
        {note.tags.length > 0 && (
          <Stack gap={1} direction="horizontal" className="flex-wrap">
            {note.tags.map(tag => (
              <Badge key={tag.id} className="text-truncates">{tag.label}</Badge>
            ))}
          </Stack>
        )}
      </Col>
      <Col xs="auto">
        <Stack gap={2} direction="horizontal">
          <Link to={`/${note.id}/edit`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="outline-danger" onClick={() => {onDelete(note.id); navigate("/")}}>Delete</Button>
          <Link to="..">
            <Button variant="outline-secondary">Back</Button>
          </Link>
        </Stack>
      </Col>
    </Row>
    <ReactMarkdown>{note.markdown}</ReactMarkdown>
  </>
}

export default Note;