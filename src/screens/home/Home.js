import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Cards from '../../components/cardsList/cardsList';
import Badge from '@mui/material/Badge';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Reports from '../../dummyData/dummyData.json';
import BlockIcon from '@mui/icons-material/Block';

const Home = () => {
    const [report, setReport] = useState({ ...Reports, blocked: [], resolved: [] })

    const resolve = (element) => setReport({ ...report, elements: report.elements.filter(item => item.id !== element.id), resolved: [...report.resolved, element] })

    const block = (element) => setReport({ ...report, elements: report.elements.filter(item => item.id !== element.id), blocked: [...report.blocked, element] })

    const [type, setType] = useState('report')

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div"> Reports</Typography>
                        <IconButton size="large" aria-label="all report" color="inherit">
                            <Badge badgeContent={report?.elements?.length} color="error">
                                <ErrorIcon onClick={() => { setType('report') }}></ErrorIcon>
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="all blocked" color="inherit">
                            <Badge badgeContent={report?.blocked?.length} color="warning">
                                <BlockIcon onClick={() => { setType('blocked') }}></BlockIcon>
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="all blocked" color="inherit">
                            <Badge badgeContent={report?.resolved?.length} color="success">
                                <CheckCircleIcon onClick={() => { setType('resolved') }}></CheckCircleIcon>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Cards  data={(type === 'report') ? report.elements : (type === 'resolved') ? report.resolved : report.blocked} resolve={resolve} block={block} type={type} ></Cards>
        </div>
    );
};

export default Home;