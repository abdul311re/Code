import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

// Create a styled card with glass morphism effect
const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(12px)', // For Safari
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const cardData = [
  {
    id: 1,
    title: "Expertly crafted solutions with global reach",
    content: "Our procurement and supply chain processes enhance operations for your organization's success.",
    action: "Let's Co-Create"
  },
  {
    id: 2,
    title: "Strategic, collaborative, and driven",
    content: "We leverage innovative strategies and cutting-edge technology to streamline our processes.",
    action: "Business Process Outsourcing"
  },
  {
    id: 3,
    title: "Fresh perspective for continuous transformation",
    content: "Expert teams to develop groundbreaking solutions. Yes we can do it even better.",
    action: "Direct Procurement"
  }
];

export default function GlassCards() {
  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      marginTop:'20px'
   
    }}>
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          maxWidth: '1200px',
          justifyContent: 'center'
        }}
      >
        {cardData.map((card) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={card.id}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <GlassCard sx={{ 
              width: '100%',
              maxWidth: 350,
              height: '100%'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h5" 
                  component="div" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    color: 'rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {card.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    color: 'rgba(0, 0, 0, 0.7)',
                    lineHeight: 1.6
                  }}
                >
                  {card.content}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#c9770d',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateX(4px)',
                      transition: 'transform 0.2s ease'
                    }
                  }}
                >
                  {card.action} →
                </Typography>
              </CardContent>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}