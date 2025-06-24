<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;

class VerifyCodeMail extends Mailable
{
    use Queueable;

    public $rawCode;

    public function __construct($rawCode)
    {
        $this->rawCode = $rawCode;
    }

    public function build()
    {
        return $this->subject('Sizning tasdiqlash kodingiz')
                    ->view('emails.verify-code')
                    ->with(['code' => $this->rawCode]);
    }
}
