import { useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grow,
  Paper,
  Typography,
} from "@mui/material";

interface ICard {
  title: string;
  techStack: string;
  thumbnail: string;
  github: string;
  url: string;
}

/* #1A2632 */

export const UCard: React.FC<ICard> = ({ title, thumbnail, github, url }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const refCard = useRef<HTMLDivElement>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (!refCard.current) return;
    observer.observe(refCard.current);

    return () => {
      observer.disconnect();
    };
  }, [refCard, observer]);

  return (
    <Grow in={isIntersecting} timeout={1000}>
      <Card ref={refCard} component={Paper} variant="elevation">
        <CardActionArea href={url} target="_blank">
          <CardMedia
            component="img"
            height="120"
            image={thumbnail}
            alt={title}
          />
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={github} target="_blank" fullWidth>
            Repositório
          </Button>
          <Button href={url} target="_blank" fullWidth>
            Visitar
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
};
