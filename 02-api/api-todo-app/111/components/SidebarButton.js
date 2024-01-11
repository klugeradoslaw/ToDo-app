import IconButton from '@mui/joy/IconButton';

export default function SidebarButton({children, onSelect, isSelected}) {

    return (
        <li>
            <IconButton className={isSelected ? 'active' : 'default'} onClick={onSelect}>
                {children}
            </IconButton>
        </li>
    )
}