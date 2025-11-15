import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await new Promise((resolve) => setTimeout(resolve, 600));

    console.log('[Contact API] Submission received:', {
      name: body.name,
      company: body.company,
      product: body.product_interest,
    });

    // Only try to save to Supabase if credentials are configured
    if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://placeholder.supabase.co') {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([body])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        // Still return success - form submission logged
      } else {
        console.log('[Contact API] Saved to database');
      }
    } else {
      console.log('[Contact API] Supabase not configured - submission logged only');
    }

    return NextResponse.json({
      ok: true,
      message: 'Contact form submitted successfully',
      data: body,
    });
  } catch (error: any) {
    console.error('[Contact API] Error:', error);
    return NextResponse.json(
      { ok: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
