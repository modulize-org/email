"use client";

import * as React from "react";
import { CopyButton, CopyWithClassNames } from "@/components/copy-button";
import { Icons } from "@/components/icons";
import { StyleSwitcher } from "@/components/style-switcher";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEmailConfig } from "@/hooks/use-email-config";
import { email_styles } from "@/lib/config/email-styles";
import { email_templates_directory } from "@/lib/config/email-templates";
import { cn } from "@/lib/utils"
import { render } from "@react-email/render"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
}

export function ComponentPreview({
  name,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  ...props
}: ComponentPreviewProps) {
  const [config] = useEmailConfig()
  const index = email_styles.findIndex((style) => style.name === config.style)
  const Component = email_templates_directory[config.style][name]?.component
  const markup = render(<Component />, { pretty: true })

  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[index]

  const Preview = React.useMemo(() => {
    return <iframe srcDoc={markup} className="w-full h-[calc(100vh_-_150px)]" />
  }, [name, config.style, markup])

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [, Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[]

      console.log(Button)

      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            <StyleSwitcher />

            {extractedClassNames ? (
              <CopyWithClassNames
                value={codeString}
                classNames={extractedClassNames}
              />
            ) : (
              codeString && <CopyButton value={codeString} />
            )}
          </div>
          <>
            <div
              className={cn(
                "preview flex min-h-[350px] w-full justify-center",
                {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                }
              )}
            >
              <React.Suspense
                fallback={
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </>
        </TabsContent>

        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}