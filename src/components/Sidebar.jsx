import React from 'react'
import "./sidebar.css"
import {SidebarOption} from './';
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import { openSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button 
                    startIcon={<AddIcon fontSize="large" />}
                    className="sidebar__compose"
                    onClick={()=>dispatch(openSendMessage())}
                >Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={96}  selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={30} selected={false} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={40} selected={false} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={99} selected={false} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={157} selected={false} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={67} selected={false} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={364} selected={false} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
