import { useEffect, useMemo, useRef, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
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
  stack: { name: string; iconUrl: string }[];
  secondaryStack: { name: string; iconUrl: string }[];
}

/* #1A2632 */

export const UCard: React.FC<ICard> = ({
  title,
  thumbnail,
  github,
  url,
  stack,
  secondaryStack,
}) => {
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
            <AvatarGroup variant="rounded" max={10}>
              {secondaryStack.map(({ name, iconUrl }, i) => (
                <Avatar
                  key={i}
                  sx={{
                    alignSelf: "end",
                    width: "20px",
                    height: "20px",
                    background: "#4E4E4E",
                  }}
                  title={name}
                  alt={name}
                  src={iconUrl}
                />
              ))}
              {stack.map(({ name, iconUrl }, i) => (
                <Avatar
                  key={i}
                  sx={{ width: "40px", height: "40px", background: "#4E4E4E" }}
                  title={name}
                  alt={name}
                  src={iconUrl}
                />
              ))}
            </AvatarGroup>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={github} target="_blank" fullWidth>
            Reposit??rio
          </Button>
          <Button href={url} target="_blank" fullWidth>
            Visitar
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
};
