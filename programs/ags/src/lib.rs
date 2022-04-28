use anchor_lang::prelude::*;

declare_id!("FzotaRk2VCNWVMNc1RzdtBB73HU8uCM76r5t9UeCBcqY");

#[program]
pub mod ags {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let endpoint = &mut ctx.accounts.endpoint; // GETTING ACCOUNT CONTEXT

        endpoint.data = 0; // INITILIZING DATA INTO CONTEXT
        endpoint.author = ctx.accounts.user.key(); // SETTING AUTHOR

        Ok(())
    }

    pub fn update(ctx: Context<Update> , data: u64) -> Result<()> {
        let endpoint = &mut ctx.accounts.endpoint; // GETTING ACCOUNT CONTEXT

        endpoint.data = data; // UPDATING DATA IN CONTEXT

        Ok(())
    }
}


// CREATING A STRUCT TO HOLD THE PROGRAM'S STATE
#[account]
pub struct EndPoint{
    pub author: Pubkey,
    pub data: u64,
}

// CREATING A STRUCT TO UPDATE THE PROGRAM'S STATE
#[derive(Accounts)]
pub struct Update<'info> {
    
    pub author: Signer<'info>,
    
    #[account(mut, has_one=author)] // CHECKING FOR THE AUTHOR 
    pub endpoint: Account<'info ,EndPoint>,
}

// CREATING INITILIZER FUNCTION
#[derive(Accounts)]
pub struct Initialize<'info> {

    
    // GETTING THE USER ACCOUNT FOR PAYER 
    #[account(mut)] // FOR ACCOUNTS BELOW TO BE MUTABLE
    pub user:  Signer<'info>, // GETTING WALLET ADDRESS
    
    // GETTING SYSTEM PROGRAM TO FULFILING THE BASIC NEEDS
    pub system_program: Program<'info, System>,
    

    // INITILIING THE ACCOUNT ENDPOINT
    #[account(init, payer = user,space = 8 + 40 + 8)]
    pub endpoint: Account<'info,EndPoint>,
}


