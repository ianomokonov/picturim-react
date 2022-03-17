import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AuthorShortDto } from '../../services/dto/author.dto';

export interface AuthorMiniCardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    author: AuthorShortDto;
}
