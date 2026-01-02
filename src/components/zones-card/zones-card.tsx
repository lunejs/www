import { FeatureCard } from '../feature-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export const ZonesCard = () => {
  return (
    <FeatureCard className="col-span-1 lg:col-span-3 flex flex-col justify-between gap-4">
      <div className="bg-card p-4 pr-0 border border-r-0 rounded-md rounded-r-none ml-4 mt-4 sm:ml-6 sm:mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-platform">Zone</TableHead>
              <TableHead className="font-platform">Rates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="font-platform">Local</span>
              </TableCell>
              <TableCell className="font-platform">{2}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="font-platform">South America</span>
              </TableCell>
              <TableCell className="font-platform">{1}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className="font-platform">International</span>
              </TableCell>
              <TableCell className="font-platform">{1}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <footer className="px-4 pb-4 flex flex-col gap-2 sm:px-6 sm:pb-6">
        <p className="font-medium">Ship smarter</p>
        <p className="text-muted-foreground">
          Set rates by zone, offer in store pickup. Customers choose, you deliver.
        </p>
      </footer>
    </FeatureCard>
  );
};
