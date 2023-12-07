import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const industryData = {
  0: {
    "category": "Household Appliances",
    "brand": ["Panasonic", "Sharp", "Xiaomi", "Dyson", "Whirlpool", "Beko"]
  },
  1: {
    "category": "Digital Application",
    "brand": ["ELSA", "Momo", "Raise - Virtual Assistant for Parents", "Zalo"]
  },
  2: {
    "category": "Automobile",
    "brand": ["Subaru", "Toyota", "Tesla", "Honda"]
  },
  3: {
    "category": "Smartphones",
    "brand": ["Huawei", "Nokia", "Apple", "Vivo"]
  },
  4: {
    "category": "Airlines",
    "brand": ["Thai Airways", "Pacific Airlines (Jetstar Pacific)", "Singapore Airlines", "Emirates Airlines"]
  },
  5: {
    "category": "Apparel",
    "brand": ["H&M", "Mango", "Zara", "Uniqlo", "Dior", "Celine", "Massimo Dutti"]
  },
  6: {
    "category": "Restaurant/Cafe",
    "brand": ["Haidilao", "KFC", "Hutong", "Crystal Jade", "Texas chicken"]
  },
  7: {
    "category": "Beverage",
    "brand": ["Heineken", "Lavie", "Trung Nguyen", "TH True Tea", "Vinh Hao"]
  },
  8: {
    "category": "Packaged Food",
    "brand": ["Orion", "Hao Hao instant noodle", "Chinsu chili sauce", "Bibigo/ CJ Foods", "Kido's Ice Cream"]
  },
  9: {
    "category": "Beauty",
    "brand": ["Innisfree", "Cocoon", "HappySkin", "Sulwhasoo", "Adiva (collagen)"]
  }
};

const decisionData = {
  0: "The company/brand wants to evaluate the market opportunity in the rural areas of Vietnam.",
  1: "The company/brand wants to target a new group of customers in terms of demographics (younger age group or older age group- your choice depending on your assigned brand, or another gender different from the current one-up to you to decide relevantly).",
  2: "The company/brand wants to understand why their online sales channels are not working as well as expected. Update: if the brand you have does not sell online, feel free to choose other brands, and tell your lecturer about your choice. If the industry is not suitable to sell online, choose another industry that is more suitable and tell your lecturer.",
  3: "The company/brand wants to better understand the different segments of customers in their current customer base so that they can fine-tune their offerings to these sub-segments.",
  4: "The company/brand wants to trasnformedText out two different new versions of its brand identity to make a final decision on one. Update: Check the article Brand Identity: What It Is and How To Build OneLinks to an external site. if you do not understand the concept “brand identity”. To make it easier, you can think of “brand identity” as the logo, as it is central to this concept.",
  5: "The company/brand wants to explore an international market (a new country- a country of your choice, depending on your assigned brand).",
  6: "The company/brand wants to seek customer feedback for their product/service improvement.",
  7: "The company/brand wants to reposition the brand in a way that is closer to the perception of the target group of customers. Update: If you do not fully know what “repositioning” means, please do research. “Repositioning” means changing the positioning strategy. You learned about positioning from your beginner class. Article from Indeed: What Is Repositioning?Links to an external site. Lumen Learning: Reading: RepositioningLinks to an external site. Repositioning case: Cadbury ditches joy positioning after six yearsLinks to an external site. Repositioning case: REDvolution: Repositioning the Nescafé BrandLinks to an external site.",
  8: "The company/brand wants to identify a suitable e-commerce strategy (using their own website/app, social media pages, or third-party platforms (website and/or app), partnership with another brand, or a combination of those options).",
  9: "The company/brand wants to measure and compare the effectiveness of the uses of two different celebrities for brand endorsement and communication campaigns."
}; 

function App() {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState({
    industry: {},
    decision: {}
  })

  const isResult = Object.keys(result.industry).length !== 0;

  const onChangeId = (e) => {
    setError('')
    const { value } = e.target;

    if (value.length > 2) return;

    setStudentId(value);
  };

  const getResult = (strValue) => {
    if (strValue.length !== 2 || Number.isNaN(strValue)) {
      setError(`Need ${2 - strValue.length} more digit(s)`);
      return;
    }

    const [firstNum, lastNum] = strValue;
    const targetIndustry = industryData[parseInt(firstNum)];
    const targetDecision = decisionData[parseInt(lastNum)];

    setResult({
      industry: targetIndustry,
      decision: targetDecision
    })
  }

  const reset = () => {
    setStudentId('');
    setResult({
      industry: {},
      decision: {}
    })
    setError('')
  }

  const trasnformedText = !!result.decision.length && result.decision.replace(/\./g, '.<br/><br/>');

  return (
    <Grid container sx={{ height: '100%', width: '80%', position: 'relative' }} display={'flex'} justifyContent={'center'} alignContent={'center'} mt={2} mb={2}>
      <Paper sx={{ padding: { md: 16, xs: 4} }}>
        <Grid container sx={{ height: '100%' }} display={'flex'} justifyContent={'center'} alignContent={'center'} rowSpacing={4}>
          <Grid item xs={12} textAlign={'center'}>
            <Typography sx={{ typography: { md: 'h2', xs: 'h4' } }}>
              Enter your last 2 student ID digits:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ width: '100%', height: '50%', paddingBottom: '50%', position: 'relative' }}>
              <iframe
                src="https://giphy.com/embed/PzTGOjwfK6whi"
                width="100%"
                height="50%"
                style={{ position: 'absolute' }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="Giphy Embed"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              value={studentId} 
              onChange={onChangeId}
              fullWidth
              type='number'
              error={!!error}
              helperText={error}
              inputProps={{ style: { textAlign: 'center' }}}
              disabled={isResult}
              placeholder='Your last 2 digits - Example: S123456 - last 2 digits are 56'
            />
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'center'} alignContent={'center'}>
            <Button 
              variant='contained'
              color='secondary'
              onClick={() => {
                if (isResult) {
                  reset();
                } else {
                  getResult(studentId)
                }
              }}
            >
              {isResult ? 'Reset' : 'Get your gift'}
            </Button>
          </Grid>
          {
            isResult && (
              <>
               <Grid item xs={12} >
                <hr />
               </Grid>
                <Grid item xs={12} >
                  <Grid container rowSpacing={4}>
                    <Grid item xs={12} textAlign={'center'}>
                      <Typography sx={{ typography: { md: 'h3', xs: 'h5' } }}>
                        Your allocated industry/company/brand
                      </Typography>
                    </Grid>
                    <Grid item xs={12} >
                      <div style={{ width: '100%', height: '40%', paddingBottom: '50%', position: 'relative' }}>
                        <iframe
                          src="https://giphy.com/embed/9igxeS3AMDIu4"
                          width="100%"
                          height="50%"
                          style={{ position: 'absolute' }}
                          frameBorder="0"
                          className="giphy-embed"
                          allowFullScreen
                          title="Giphy Embed"
                        ></iframe>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }}>
                        Industry:
                      </Typography>
                      <Typography sx={{ typography: { md: 'h6', xs: 'body1' }, marginBottom: 2 }}>
                        {result.industry.category}
                      </Typography>
                      <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }}>
                        Brands:
                      </Typography>
                      <List>
                        {
                          result.industry.brand.map((brand, index) => (
                            <React.Fragment key={brand}>
                              <ListItem>
                                <ListItemIcon>
                                  <FiberManualRecordIcon />
                                </ListItemIcon>
                                <ListItemText primary={brand} />
                              </ListItem>
                              {index !== result.industry.brand.length -1 && (<Divider />)}
                            </React.Fragment>
                          ))
                        }
                      </List>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }}>
                        Target decision:
                      </Typography>
                      <Typography sx={{ typography: { md: 'h6', xs: 'body1' } }} dangerouslySetInnerHTML={{ __html: trasnformedText }} />
                    </Grid>
                    <Grid item xs={12}>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )
          }
        </Grid>
      </Paper>
      <Grid item xs={12} sx={{ position: 'fixed', bottom: 10, right: 10, color: 'black'}}>
        <div style={{ width: '100%', height: '100%', paddingBottom: '100%', position: 'relative' }}>
          <iframe
            src="https://giphy.com/embed/d2XBdXlfVYTeM"
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Giphy Embed"
          ></iframe>
        </div>
        <span style ={{ backgroundColor: 'white', padding: 4, borderRadius: 4}}>
          HueHue
        </span>
      </Grid>
    </Grid>
  )
}

export default App
