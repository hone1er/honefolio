"use client";
import { useState } from "react";
import { isAddress } from "viem";
import Image from "next/image";
import useEnsProfile from "~/hooks/useEnsProfile";
import { Input } from "./input";
import truncateAddress from "~/utils/truncateAddress";

interface AddressInputProps extends React.HTMLProps<HTMLInputElement> {
  onRecipientChange: (address: string, isValid: boolean) => void;
  onRawInputChange?: (address: string) => void;
  disabled?: boolean;
}

export const AddressInput = ({
  onRecipientChange,
  onRawInputChange,
  disabled = false,
}: AddressInputProps) => {
  const [isValidToAddress, setIsValidToAddress] = useState<boolean>(false);
  const [rawTokenAddress, setRawTokenAddress] = useState<string>("");
  const { ensAddress: ensAddy, ensAvatar } = useEnsProfile({
    ensName: rawTokenAddress,
  });

  // Handle input change for recipient address
  const handleToAdressInput = (_to: string) => {
    const isValid = isAddress(_to);
    setIsValidToAddress(isValid);

    // Update raw token address and notify parent component
    onRecipientChange(_to, isValid);
    setRawTokenAddress(_to);

    // Invoke optional callback for raw input change
    if (onRawInputChange) {
      onRawInputChange(_to);
    }
  };
  return (
    <div
      className={`duration-400 relative flex flex-col gap-2 transition-all ${ensAddy ? "h-[106px] rounded-b-[8px]" : "h-[48px] rounded-b-[48px]"}`}
    >
      <Input
        type="text"
        placeholder="0x..."
        disabled={disabled}
        className={`relative z-40 min-h-10 w-full bg-white ${rawTokenAddress.length > 0 && isValidToAddress ? "border-green-500" : rawTokenAddress.length > 0 && !isValidToAddress ? "border-red-500" : "border-auto"} rounded-t-[8px]  px-4 py-2 transition-all duration-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        value={rawTokenAddress}
        name="address"
        onChange={(e) => handleToAdressInput(e.target.value)}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          setRawTokenAddress(ensAddy ?? "");
          onRecipientChange(ensAddy ?? "", true);
          setIsValidToAddress(true);
        }}
        className={`text-neutral-content relative bottom-3 z-10 flex w-full min-w-[140px] max-w-80 flex-row items-center justify-between rounded-b-[8px]  bg-slate-100 px-4 py-2 transition-all duration-500 hover:cursor-pointer md:px-4 ${
          ensAddy
            ? "max-w-full translate-y-0 opacity-100"
            : "pointer-events-none max-w-0 -translate-y-12 opacity-0"
        }`}
      >
        {ensAvatar ? (
          <div className="avatar ">
            <div className="w-8 rounded-full bg-slate-800">
              <Image
                width={320}
                height={320}
                content="responsive"
                src={ensAvatar ?? ""}
                alt="avatar"
                placeholder="blur"
                blurDataURL="/assets/icons/ethereum.png"
                className={`${ensAvatar ? "block" : "hidden"}  relative h-8 min-h-8 w-8 min-w-8 rounded-full object-cover`}
              />
            </div>
          </div>
        ) : (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-8 items-start rounded-full">
              <span className="relative bottom-0 text-lg">
                {rawTokenAddress[0]}
              </span>
            </div>
          </div>
        )}
        <span>{truncateAddress(ensAddy ?? "")}</span>
      </button>
    </div>
  );
};
