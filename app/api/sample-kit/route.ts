import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await new Promise((resolve) => setTimeout(resolve, 600));

    console.log('[Sample Kit API] Request received:', {
      name: body.name,
      company: body.company,
      product: body.product_sku,
      quantity: body.quantity,
    });

    // Only try to save to Supabase if credentials are configured
    if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://placeholder.supabase.co') {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('sample_kit_requests')
        .insert([body])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        // Still return success - form submission logged
      } else {
        console.log('[Sample Kit API] Saved to database');
      }
    } else {
      console.log('[Sample Kit API] Supabase not configured - submission logged only');
    }

    return NextResponse.json({
      ok: true,
      message: 'Sample kit request submitted successfully',
      data: body,
    });
  } catch (error: any) {
    console.error('[Sample Kit API] Error:', error);
    return NextResponse.json(
      { ok: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
