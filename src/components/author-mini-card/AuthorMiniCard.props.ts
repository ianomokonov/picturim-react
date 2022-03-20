import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AuthorShortDto } from '../../_services/dto/author.dto';

export interface AuthorMiniCardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    author: AuthorShortDto;
}
